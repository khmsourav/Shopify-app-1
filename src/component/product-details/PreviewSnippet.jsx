
import {
    Box,
    Card,
    Button,
    Collapsible,
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
} from '@shopify/polaris';
import {
    CaretDownIcon
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
import PreviewSnippetWrapper from './PreviewSnippetWrapper';

export default function PreviewSnippet() {

    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    const [textFieldValue, setTextFieldValue] = useState('Our awesome T-shirt in 70 characters or less.');

    const handleTextFieldChange = useCallback(
        (value) => setTextFieldValue(value),
        [],
    );

    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'all-customers-fitted-1',
            content: 'Google Search Preview',
            accessibilityLabel: 'All customers',
            // panelID: 'all-customers-fitted-content-2',
        },
        {
            id: 'accepts-marketing-fitted-2',
            content: 'Facebook Link Preview',
            // panelID: 'accepts-marketing-fitted-content-2',
        },
        {
            id: 'accepts-marketing-fitted-3',
            content: 'X Link Preview',
            img: "https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850",
            // panelID: 'accepts-marketing-fitted',
        },
    ];

    return (
        <Box>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                <BlockStack gap={200} title={tabs[selected].content}>
                    <PreviewSnippetWrapper />

                </BlockStack>
            </Tabs>
        </Box>

    );
}