import { Create } from '../pages/Create'
import { Home } from '../pages/Home'
import { Preview } from '../pages/Preview'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
}