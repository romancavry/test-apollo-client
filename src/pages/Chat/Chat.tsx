import * as React from 'react';
import { useQuery, useLazyQuery, useSubscription } from '@apollo/client';
import { Helmet } from 'react-helmet';

import { GET_DIALOGUES } from 'modules/dialogues';
import type { Dialogue as DialogueType } from 'modules/dialogues';
import { GET_MESSAGES, MESSAGES_SUBSCRIPTION } from 'modules/messages';
import type { Message as MessageType } from 'modules/messages';

import { NoData } from 'components/NoData';

import { Loading } from 'uikit/atoms';

import { CreateDialogue, Dialogue, Input, Message } from './components';
import {
  HomeSection,
  Inner,
  Dialogues,
  Text,
  Content,
  DialogueWrapper,
} from './styled';

const Chat = () => {
  const { data: messagesSubscriptionData } = useSubscription(
    MESSAGES_SUBSCRIPTION,
  );
  console.log('messagesSubscriptionData: ', messagesSubscriptionData);

  const { data: getDialoguesData } = useQuery(GET_DIALOGUES, {
    fetchPolicy: 'cache-only',
  });
  const dialogues = getDialoguesData?.getDialogues ?? [];
  // console.log('dialogues: ', dialogues);

  const [getApiMessages, { called, loading, data: getMessagesData }] =
    useLazyQuery(GET_MESSAGES);
  const messages = getMessagesData?.getMessages ?? [];
  // console.log('messages: ', messages);

  const [activeDialogueId, setActiveDialogueId] = React.useState<number | null>(
    null,
  );

  const getMessages = React.useCallback(
    async (ids: number[]) => {
      const res = await getApiMessages({ variables: { ids } });

      if (res.error) {
        // eslint-disable-next-line no-console
        console.log('getMessages ERROR: ', res.error);
      }
    },
    [getApiMessages],
  );

  return (
    <HomeSection data-light data-no-padding>
      <Helmet>
        <title>Folto. Chat</title>
      </Helmet>

      <Inner>
        <Dialogues>
          <Text data-uppercase>Dialogues</Text>

          {!dialogues.length && <NoData />}

          {dialogues.map((dialogue: DialogueType) => (
            <DialogueWrapper
              key={dialogue.id}
              role='button'
              tabIndex={0}
              onClick={() => {
                setActiveDialogueId(Number(dialogue.id));
                return getMessages(dialogue.messagesIds);
              }}
            >
              <Dialogue dialogue={dialogue} />
            </DialogueWrapper>
          ))}

          <CreateDialogue />
        </Dialogues>

        <Content>
          {!called && <Text>Select dialogue</Text>}

          {loading && <Loading />}

          {called && !!messages.length && (
            <React.Fragment>
              {messages.map((message: MessageType) => (
                <Message key={message.id} message={message} />
              ))}
            </React.Fragment>
          )}

          {called && <Input dialogueId={activeDialogueId} />}
        </Content>
      </Inner>
    </HomeSection>
  );
};

export default Chat;
