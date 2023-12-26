import { Hero } from './Hero';
import { Specials } from './Specials';
import { Testimonials } from './Testimonials';
import { About } from './About';

export function HomePage() {
    return (<>
        <Hero></Hero>
        <Specials></Specials>
        <Testimonials />
        <About></About>
    </>
    )
}
