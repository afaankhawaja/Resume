import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import '../styles/Timeline.css';
export default function BasicTimeline() {
  return (
    <div className="timeline">
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><img src='https://iconscout.com/icon/ensemble-3864388'/>joined Ensemble-ai as React intern</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2020-24
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>studied BS computer science at C.U.S.T </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2017-18
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>completed intermediate at PGC blue area</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2015-16
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>completed Matriculation at Allied School</TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
