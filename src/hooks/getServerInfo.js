import { ref } from "vue"
export default function getServerInfo(serv_url,serv_limit) {
    const servInfo = {
        url: ref(serv_url),
        pageTotal: ref(0),
        limit: ref(serv_limit),
        page: ref(1)
    }
    return {
        servInfo
    }
}