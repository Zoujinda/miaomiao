import Moviecom from '@/views/Movie/index'
import Searchcom from '@/components/Search/index'
import Nowplayingcom from '@/components/NowPlaying/index'
import Comingsooncom from '@/components/ComingSoon/index'
import Citycom from '@/components/City/index'
export default{
     // 下面的component的写法是按需引入组件
     path: '/movie', component: Moviecom,
     children:[
          {
               path:'/movie/city',
               component: Citycom,
          },
          {
               path:'/movie/comingsoon',
               component: Comingsooncom,
          },
          {
               path:'/movie/nowplaying',
               component: Nowplayingcom,
          },
          {
               path:'/movie/search',
               component: Searchcom,
          },
          {
               path:'/movie',
               redirect: '/movie/nowplaying'
          }
     ]
}