import {ref,computed} from 'vue'

export default function sortData(products){
    const selectOption = ref('')
    const sortedData = computed(()=>{
        return [...products.value].sort((p1, p2) =>
        p1[selectOption.value]?.localeCompare(p2[selectOption.value])
      );
    })
    return {selectOption,sortedData}
}