import { BlockStack, Box, Card, Text } from "@shopify/polaris";
// import BasicSEO from "./BasicSEO";
import TrueFalseWrapper from "./TrueFalseWrapper";

const TrueFalse = () => {

    const employee = [
        {
            issues: true,
            subTitle: 'Focus Keyword is unique.',

        },
        {
            issues: false,
            subTitle: 'Focus Keyword is unique.',

        },
        {
            issues: false,
            title: 'Focus Keyword',

        },
    ]
    return (
        <Card>
            <BlockStack gap={200}>
                {employee.map((item, index) => (
                    <TrueFalseWrapper title={item.title} subTitle={item.subTitle} issues={item.issues} key={index} />
                ))}
            </BlockStack>
        </Card>
    )
}
export default TrueFalse;