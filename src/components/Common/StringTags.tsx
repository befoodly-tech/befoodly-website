import { Chip, Stack } from '@mui/material';

interface StringTagsProps {
  labels: string[];
}

const StringTags = (props: StringTagsProps) => {
  const { labels } = props;

  return (
    <Stack direction="row" spacing={1}>
      {labels?.map((label, index) => (
        <Chip label={label} key={index} sx={{ color: '#393939' }} variant="outlined" />
      ))}
    </Stack>
  );
};

export default StringTags;
