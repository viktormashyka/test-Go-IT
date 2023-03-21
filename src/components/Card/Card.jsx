// import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { Wrapper, Text1, Text2, Button, Title } from './Card.styled';

export const Card = () => {
  const [tweets, setTweets] = useState(777);
  const [followers, setFollowers] = useState(100500);
  const [isChecked, setIsChecked] = useState(false);

  const onFollow = () => {
    setIsChecked(!isChecked);
    console.log('isChecked: ', isChecked);
    !isChecked ? setFollowers(followers + 1) : setFollowers(followers - 1);
  };

  return (
    <Wrapper>
      <Text1> {tweets} tweets</Text1>
      <Text2>{followers} Followers</Text2>
      <Button
        type="button"
        checked={isChecked}
        onClick={onFollow}
        style={{
          background: !isChecked ? '#ebd8ff' : '#5cd3a8',
        }}
      >
        <Title>{isChecked ? 'Following' : 'Follow'}</Title>
      </Button>
    </Wrapper>
  );
};
