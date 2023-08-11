import * as React from 'react';
import { useQuery, useLazyQuery, useSubscription } from '@apollo/client';
import { Helmet } from 'react-helmet';

import { GET_DIALOGUES } from 'modules/dialogues';
import type { Dialogue as DialogueType } from 'modules/dialogues';
import { GET_MESSAGES, MESSAGES_SUBSCRIPTION } from 'modules/messages';
import type { Message as MessageType } from 'modules/messages';

import { NoData } from 'components/NoData';

import { Loading } from 'uikit/atoms';

import { CreateDialogue, Dialogue, Sender, Message } from './components';
import {
  HomeSection,
  Inner,
  Dialogues,
  Text,
  Content,
  DialogueWrapper,
} from './styled';

const Chat = () => {
  // Dialogues
  const { data: getDialoguesData } = useQuery(GET_DIALOGUES, {
    fetchPolicy: 'cache-only',
  });
  const dialogues = getDialoguesData?.getDialogues ?? [];

  const [activeDialogueId, setActiveDialogueId] = React.useState<number | null>(
    null,
  );

  // Messages
  const { data: messagesSubscriptionData } = useSubscription(
    MESSAGES_SUBSCRIPTION,
  );
  console.log('messagesSubscriptionData: ', messagesSubscriptionData);

  const [getApiMessages, { loading, called, data: getMessagesData, refetch }] =
    useLazyQuery(GET_MESSAGES);
  const messages = getMessagesData?.getMessages ?? [];

  const getMessages = React.useCallback(
    async (dialogueId: number) => {
      setActiveDialogueId(dialogueId);

      const res = await getApiMessages({ variables: { dialogueId } });

      if (res.error) {
        // eslint-disable-next-line no-console
        console.log(`getMessages(${dialogueId}) ERROR: `, res.error);
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
                getMessages(Number(dialogue.id));
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

          {called && <Sender refetch={refetch} dialogueId={activeDialogueId} />}
        </Content>
      </Inner>
    </HomeSection>
  );
};

export default Chat;
