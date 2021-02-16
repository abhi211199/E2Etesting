import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.onCancel(true);
  };

  function sendData()
  {
    let note=document.getElementById('note').value;
    let summary=document.getElementById('summary').value;
    handleClose();
    props.onHome({ note: note, summary: summary, status: props.status || false, id: props.id });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add/Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="note"
            label="Note"
            type="email"
            defaultValue={props.note}
            fullWidth
          />
          <TextField
            margin="dense"
            id="summary"
            label="Summary"
            type="email"
            defaultValue={props.summary}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" onClick = {()=>sendData()}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
