import {
    BlockStack, InlineGrid, InlineStack, Page
} from '@shopify/polaris';
import MainWrapper from "./MainWrapper";
import Sidebar from './Sidebar';

export default function ProductDetails() {
    return (
        <>
            <Page
                backAction={{ content: 'Products', url: '#' }}
                title="Example T-Shirt"
                primaryAction={{ content: 'Save', variant: "primary" }}
                secondaryActions={[
                    { content: 'Discard' },
                ]}
                pagination={{
                    hasPrevious: true,
                    hasNext: true,
                }}
            >

                <BlockStack>
                    <InlineGrid columns={['twoThirds', 'oneThird']} gap='400' alignItems='start'>
                        <MainWrapper />
                        <Sidebar />
                    </InlineGrid>

                </BlockStack>
            </Page>
        </>

    );
}