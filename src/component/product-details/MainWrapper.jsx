
import {
    Text,
    BlockStack,
    Page,
    Button,
    Box,
} from '@shopify/polaris';
import GeneralSEO from './GeneralSEO';
import AccordionWrapper from '../AccordionWrapper';
import PreviewSnippet from './PreviewSnippet';
import AltText from './AltText';
export default function MainWrapper() {
    return (
        <BlockStack gap='400'>

            <AccordionWrapper title='General SEO'>
                <GeneralSEO />
            </AccordionWrapper>

            <AccordionWrapper title='Image Alt Text'>
                <AltText />
            </AccordionWrapper>

            <AccordionWrapper title='Preview Snippet'>
                <PreviewSnippet />
            </AccordionWrapper>

        </BlockStack>

    );
}
