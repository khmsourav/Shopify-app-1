
import {
    Text,
    BlockStack
} from '@shopify/polaris';
export default function Heading() {
    return (
        <>
            <BlockStack gap='200'>
                <Text variant="heading3xl" as="h2">
                    Welcome to StoreSEO
                </Text>
                <Text variant="headingSm" as="p">
                    Drive sales and traffic with the power of StoreSEO and improve your search engine ranking
                </Text>
            </BlockStack>
        </>

    );
}
