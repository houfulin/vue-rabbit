//封装轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from "@/APIS/home"
export function useBanner() {
    const bannerList = ref([]);

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: "2",
        });
        console.log(res);
        bannerList.value = res.result;
    };

    onMounted(() => getBanner());

    return {
        bannerList
    }
}