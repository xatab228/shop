import axios from "axios";

export default function loadMoreData(servInfo,products) {

    const fetchingMoreData = async() => {
        try {
          servInfo.page.value += 1
            const response = await axios.get(servInfo.url.value, {
              params: {
                _page: servInfo.page.value,
                _limit: servInfo.limit.value,
              },
            });
            servInfo.pageTotal.value = Math.ceil(response.headers["x-total-count"] / servInfo.limit.value)
            products.value = [...products.value,...response.data]
          } catch (err) {
            console.log(err);
          }
    }


    return {
        fetchingMoreData
    }

}