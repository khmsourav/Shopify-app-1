
import {
    Text,
    BlockStack,
    Divider,
    Box,
    InlineStack,
    Icon,
} from '@shopify/polaris';
import { XIcon, CheckIcon } from '@shopify/polaris-icons';


export default function BasicSEO({ title, issue, img }) {
    return (
        <Box paddingBlock='200' paddingInline='300' borderBlockEndWidth="025" borderColor='border-brand'>
            <BlockStack>
                {/* <Divider borderColor="input-border" /> */}
                <InlineStack blockAlign='center' gap='200' paddingBlock='100' paddingInline='200' wrap={false}>
                    <Box>
                        <Icon source={issue ? XIcon : CheckIcon} tone={issue ? 'critical' : 'success'} />
                    </Box>
                    <Text as='p' variant='headingXs'>{title}</Text>
                    {/* <img src={img} alt="" /> */}
                </InlineStack>
            </BlockStack>
        </Box>
    );
}
