import Home from './pages/Home';
import Topics from './pages/Topics';

const router = [
  {path: '/home', component: Home, exact: true},
  {path:'/about',component:Home},
  {path:'/topics',component:Topics},
]

export default router;
