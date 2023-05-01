import { Card, CardContent, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TeamCardProps } from '../../types/AppConfig';
import styles from './Common.module.css';

const TeamCard = (props: TeamCardProps) => {
  return (
    <Card className={styles.teamContainer}>
      <img src={props.photoUrl} className={styles.memberImg} />
      <CardContent className={styles.memberInfo}>
        <Typography className={styles.memberName}>{props.name}</Typography>
        <Typography className={styles.memberTitle}>{props.title}</Typography>
        <Typography className={styles.memberDescription}>{props.description}</Typography>
        <LinkedInIcon
          onClick={() => (window.location.href = props.linkedinLink)}
          className={styles.memberLinkedList}
        />
      </CardContent>
    </Card>
  );
};

export default TeamCard;
