
import {
    Text,
    BlockStack,
    Divider,
    Card,
    ProgressBar,
    InlineStack,
    Badge
} from '@shopify/polaris';
import TotalScore from './TotalScore';
import NoIndex from './NoIndex';
import AccordionWrapper from '../AccordionWrapper';
import AnalysisWrapper from './AnalysisWrapper';
// import BasicSEO from './BasicSEO';
import BasicSeoWrapper from './BasicSeoWrapper';
import TrueFalse from './TrueFalse';
import TrueFalseWrapper from './TrueFalseWrapper';
export default function Sidebar() {
    return (
        <BlockStack gap={300}>
            <TotalScore />

            <AccordionWrapper title='Basic SEO Analysis' padding='0' badgeText='2 Issues' badgeTone='attention' >
                <BasicSeoWrapper />
            </AccordionWrapper>

            <AnalysisWrapper title='SEO Analysis' badgeContent='3 issues'>
                <TrueFalse />
            </AnalysisWrapper>

            <NoIndex />

            <AccordionWrapper title='Basic SEO Analysis' padding='0' badgeText='2 Issues' badgeTone='attention' >

                {/* <TrueFalseWrapper /> */}
            </AccordionWrapper>


            <TrueFalse />

        </BlockStack>


    );
}
