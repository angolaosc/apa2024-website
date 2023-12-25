/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styles from './style.module.css'

interface PropsType {
  state: string
}

const State = ({ state }: PropsType) => {
  const states = {
    accomplished: 'accomplished',
    canceled: 'canceled',
    inProgress: 'inProgress',
  }

  const { accomplished, canceled, inProgress } = states

  return (
    <div className={styles.state_area}>
      <span
        className={`
        ${
          (state === accomplished && styles.accomplished) ||
          (state === canceled && styles.canceled) ||
          (state === inProgress && styles.inProgress)
        }`}
      >
        {(state === accomplished && 'Realizado') ||
          (state === canceled && 'Cancelado') ||
          (state === inProgress && 'Realizando agora...')}
      </span>
    </div>
  )
}

export default State
