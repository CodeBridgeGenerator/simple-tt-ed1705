import React, { useRef } from 'react';
import { connect } from 'react-redux';
import StatsLayout from './Stats/StatsLayout';
import TrafficLayout from './Traffic/TrafficLayout';
import GoalsLayout from './Goals/GoalsLayout';
import PerformanceLayout from './StaffPerformance/PerformanceLayout';
import ActivityLayout from './Activity/ActivityLayout';
import NotificationsLayout from './Notifications/NotificationsLayout';
import LearnMoreLayout from './LearnMore/LearnMoreLayout';
import LineGraphLayout from './LineGraph/LineGraphLayout';

const DynamicDashboards = () => {
    return (
        <>
            <div className="min-h-screen flex relative lg:static surface-0">
                <div className="min-h-screen flex flex-column relative flex-auto">
                    <div className="flex flex-column flex-auto ">
                        <div className="grid ">
                            <StatsLayout />
                            <TrafficLayout />
                            <GoalsLayout />
                            <PerformanceLayout />
                            <LineGraphLayout />
                            <ActivityLayout />
                            <NotificationsLayout />
                            <LearnMoreLayout />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(DynamicDashboards);
