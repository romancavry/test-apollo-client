import * as React from 'react';

import type { Dialogue as DialogueType } from 'modules/chat';

import { Wrapper, Initials, Text } from './styled';

interface DialogueProps {
  dialogue: DialogueType;
}

const Dialogue: React.FC<DialogueProps> = ({ dialogue }) => {
  const initials = React.useMemo(() => {
    const { name } = dialogue;

    if (!name) return '';

    const initials = name.length > 1 ? `${name[0]}${name[1]}` : name[0] || '';

    return initials.toUpperCase();
  }, [dialogue]);

  return (
    <Wrapper>
      <Initials>{initials}</Initials>

      <div>
        <Text>{dialogue.name}</Text>
      </div>
    </Wrapper>
  );
};

export default Dialogue;
