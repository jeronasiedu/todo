import { Modal, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { ModalContent } from '../styles/settings.styled'
const DeleteModal = ({
  todo,
  showDeleteModal,
  setShowDeleteModal,
  setContinueDelete,
}) => {
  const handleClose = () => {
    setShowDeleteModal(false)
  }
  const modalVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <Modal
      open={showDeleteModal}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      component={motion.div}
      variants={modalVariant}
      initial="hidden"
      animate="visible"
    >
      <ModalContent>
        <h4 id="modal-title">
          Delete this todo?
          <span
            style={{
              color: '#9a371b',
              marginLeft: '0.2rem',
            }}
          >
            {todo.slice(0, 15)}
            {todo.length > 15 ? '...' : ''}
          </span>
        </h4>
        <div
          id="modal-description"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => {
              setContinueDelete(true)
              setShowDeleteModal(false)
            }}
          >
            Yes
          </Button>
          <Button variant="contained" size="small" onClick={handleClose}>
            No
          </Button>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
