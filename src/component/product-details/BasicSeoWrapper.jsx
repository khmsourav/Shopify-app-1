
import {
    Text,
    BlockStack,
    Divider,
    Box,
    Card,
    ProgressBar,
    InlineStack,
    Badge,
    Icon,
    Button
} from '@shopify/polaris';
import BasicSEO from './BasicSEO';

const analysis = [
    {
        issue: false,
        subTitle: 'Focus Keyword is unique.',
        img: 'https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50='
    },
    {
        issue: true,
        subTitle: 'Focus keyword is used in the meta title.'
    },
    {
        issue: true,
        subTitle: 'Meta description is within 120-165.'
    },
    {
        issue: false,
        subTitle: 'Focus Keyword is unique.',
        img: 'https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50='
    },
    {
        issue: false,
        subTitle: 'Focus Keyword is unique.',
        img: 'https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50='
    },
]

export default function BasicSeoWrapper() {
    return (
        <Box>
            <BlockStack>
                {analysis.map((item, index) => (
                    <BasicSEO issue={item.issue} title={item.subTitle} img={item.img} key={index} />
                ))}
            </BlockStack>
        </Box>
    );
}
