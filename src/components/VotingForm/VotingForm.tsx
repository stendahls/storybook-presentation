import { useCallback, useEffect, useRef, useState } from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import Typography from "../Typography/Typography";

const VotingForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [vote, setVote] = useState<"Yes" | "No" | undefined>(undefined);
  const [name, setName] = useState("");

  const onVote = useCallback((vote: "Yes" | "No") => {
    setVote(vote);
    setIsOpen(false);
  }, []);

  const onOpenForm = useCallback(() => {
    setVote(undefined);
    setName("");
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if(isOpen) {
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <Box p={10}>
      {!vote && (
        <Button text="Click here to vote" variant="secondary" onClick={onOpenForm} />
      )}
      {!!vote && (
        <Typography py={4}>{`${name} voted: ${vote}`}</Typography>
      )}
      <Dialog open={isOpen}>
        <Box alignItems="center" flexDirection="column">
          <Typography as="h3" variant="MediumHeading">Who are you?</Typography>
          <Typography as="label">
            Enter your name:
            <input
              ref={inputRef} 
              css={{ marginLeft: 10 }}
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
          />
          </Typography>
          <Box gap={4} pt={4}>
            <Button text="Yes" variant="primary" onClick={() => onVote("Yes")} />
            <Button text="No" variant="secondary" onClick={() => onVote("No")} />
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
};

export default VotingForm;