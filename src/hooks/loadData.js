import axios from "axios";
import { ref,onMounted } from "vue";

export default function loadData(servInfo) {
    const products = ref([])

    const fetching = async() => {
        try {
            const response = await axios.get(servInfo.url.value, {
              params: {
                _page: servInfo.page.value,
                _limit: servInfo.limit.value,
              },
            });
            servInfo.pageTotal.value = Math.ceil(response.headers["x-total-count"] / servInfo.limit.value)
            products.value = response.data
          } catch (err) {
            console.log(err);
          }
    }

    onMounted(fetching)

    return {
        products
    }

}