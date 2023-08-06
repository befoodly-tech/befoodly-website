import { Box, Button, Typography, Container } from '@mui/material';
import styles from './Filters.module.css';
import Food from '../../ui/Icon/Food';
import Snacks from '../../ui/Icon/Snacks';
import Drinks from '../../ui/Icon/Drinks';
import Ellipse from '../../ui/Icon/Ellipse';
import { useState } from 'react';

interface FilterOption {
  filterName: string;
  active: boolean;
}

interface SecondaryFilterOption {
  filterName: string;
  startIcon: JSX.Element;
  active: boolean;
}

const primaryFilterOptions: FilterOption[] = [
  {
    filterName: 'Rating 4.0+',
    active: false
  },
  {
    filterName: 'Pure Veg',
    active: true
  },
  {
    filterName: 'Veg&Egg',
    active: false
  },
  {
    filterName: 'Non-Veg',
    active: false
  }
];

const secondaryFilterOptions: SecondaryFilterOption[] = [
  {
    filterName: 'Food',
    startIcon: <Food />,
    active: true
  },
  {
    filterName: 'Snacks',
    startIcon: <Snacks />,
    active: false
  },
  {
    filterName: 'Drinks',
    startIcon: <Drinks />,
    active: false
  }
];

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>('Rating 4.0+');

  function handleFilterClick(filterName: string): void {
    setActiveFilter(filterName);
  }

  return (
    <Container>
      <Box className={styles.filters}>
        <Box className={styles.filterPrimary}>
          {primaryFilterOptions.map((filterOption, index) => (
            <Button
              key={index}
              onClick={() => handleFilterClick(filterOption.filterName)}
              className={
                activeFilter === filterOption.filterName
                  ? styles.filterPrimaryBtnActive
                  : styles.filterPrimaryBtn
              }
              startIcon={activeFilter === filterOption.filterName ? <Ellipse /> : ''}
            >
              <Typography
                className={
                  activeFilter === filterOption.filterName
                    ? styles.filterPrimarytextActive
                    : styles.filterPrimarytext
                }
              >
                {filterOption.filterName}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box className={styles.secondaryFilters}>
          {secondaryFilterOptions.map((secondaryFilterOption, index) => (
            <Button
              key={index}
              className={styles.filterSecondaryBtn}
              startIcon={secondaryFilterOption.startIcon}
            >
              <Typography className={styles.filterSecondaryTxt}>
                {secondaryFilterOption.filterName}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Filters;
