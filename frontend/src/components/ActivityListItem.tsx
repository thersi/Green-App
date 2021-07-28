import React, { useState } from 'react';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { SliderEffort } from './SliderEffort';
import IActivity from 'interfaces/IActivity';
import { Button } from '@material-ui/core';
import getPerformsActivities, { performsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';
import StCard from 'styledComponents/StCard';
import { CardHeader, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';

export const ActivityListItem = (props: IActivity) => {
  const [activityId] = useState<number>(props.id);
  const [error, setError] = useState<string>('');
  const { state, dispatch } = React.useContext(GlobalContext);
  const user = state.user!;
  const [effort, setEffort] = useState<number>(0);
  const [id, setId] = useState<number>(props.id);
  const [points, setPoints] = useState<number>(props.points);
  const [name, setName] = useState<string>(props.name);

  const convertDate = (date: Date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  };

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');

    try {
      console.log(
        'User Id: ',
        user?.id,
        ' activity Id: ',
        activityId,
        ' date: ',
        ' Today',
        ' effort: ',
        effort
      );
      const data = await performsActivity(
        user.id,
        activityId,
        convertDate(props.date),
        effort
      );
      if (data) {
        const myPerformsActivities = await getPerformsActivities();
        dispatch(performsActivities(myPerformsActivities));
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend,
        setError(err);
      }
      console.log(error);
    }
  };

  return (
    <div>
      <StCard>
        <CardContent>
            <Typography variant="body1" component="p">
                {props.name}
            </Typography>
        </CardContent>
        <CardActions style={{alignItems: 'center', justifyContent: 'center'}} >
          <SliderEffort />
        </CardActions>
      </StCard>


      <ListItem style={{ justifyContent: 'center', width: '100%' }}>
        <div>
          <StFavorite />
          <label style={{ fontSize: '14pt' }}> {props.name} </label>
          <Button variant="contained" onClick={handleSubmit} color={'primary'}>
            {' '}
            Submit{' '}
          </Button>
          <SliderEffort
            effort={effort}
            onChangeEffort={(newEffort: any) => {
              setEffort(newEffort);
            }}
          />
        </div>
      </ListItem>
      <Divider component="li" />
    </div>
  );
};
