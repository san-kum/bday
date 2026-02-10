import NewspaperLayout from '../layouts/NewspaperLayout'
import Masthead from '../components/Masthead'
import Headline from '../components/Headline'
import FeatureStory from '../components/FeatureStory'
import QuoteBlock from '../components/QuoteBlock'
import ForecastFooter from '../components/ForecastFooter'

export default function Home() {
    return (
        <NewspaperLayout>
            <Masthead />
            <Headline />
            <FeatureStory />
            <QuoteBlock />
            <ForecastFooter />
        </NewspaperLayout>
    )
}
