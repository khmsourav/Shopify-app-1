import {
    Box,
    Card,
    Button,
    Text,
    Link,
    Divider,
    TextField,
    BlockStack,
    InlineStack,
    Badge,
    Tabs,
    MediaCard,
    VideoThumbnail,
} from "@shopify/polaris";
import GoogleTab from "./GoogleTab";
import FacebookTab from "./FacebookTab";
import LinkPreviewTab from "./LinkPreviewTab";

const PreviewSnippetWrapper = () => {



    return (
        <BlockStack gap={200}>
            <GoogleTab />
            <FacebookTab />
            <LinkPreviewTab />
            {/* <MediaCard
                        portrait
                        title="Turn your side-project into a business"
                        content='This is Content'
                        primaryAction={{
                            content: 'Learn more',
                            onAction: () => { },
                        }}
                        description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
                        popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                    >
                        <img
                            alt=""
                            width="100%"
                            height="100%"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                        />
                    </MediaCard> */}
        </BlockStack>

    )
}
export default PreviewSnippetWrapper;