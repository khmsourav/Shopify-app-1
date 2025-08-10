
import {
    BlockStack, Page
}
    from '@shopify/polaris';
import Heading from './Heading';
import StatisticsWrapper from './StatisticsWrapper';
import StayTunedWrapper from './StayTunedWrapper';
import WhatsNew from './WhatsNew';
import UpgradePlan from './UpgradePlan';
import ScheduleCall from './ScheduleCall';
import SeoGuide from './SeoGuide';
import GetStarted from './GetStarted';
import DocBetterDocs from './DocBetterdocs';

export default function Home() {
    return (
        <Page>
            <BlockStack gap="400">
                <Heading />
                <StatisticsWrapper />
                <WhatsNew />
                <UpgradePlan />
                <GetStarted />
                <ScheduleCall />
                <StayTunedWrapper />
                <SeoGuide />
                <DocBetterDocs />
            </BlockStack>
        </Page>
    );
}