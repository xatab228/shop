import {ref,computed} from 'vue'

export default function sortDataAndSearch(sortedData){
    const searchItem = ref('')
    const sortedAndSearchedData = computed(()=>{
        return sortedData.value.filter((product) =>
        product.title.toLowerCase().includes(searchItem.value.toLowerCase())
      );
    })
    return {searchItem,sortedAndSearchedData}
}