import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemovetodo: ({ id }: TodoId) => void
}
export const Todo: React.FC<Props> = ({ id, title, completed, onRemovetodo, onToggleCompleteTodo }) => {
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({ id, completed: event.target.checked })
  }
  return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={ handleChangeCheckBox }
            />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => { onRemovetodo({ id }) }}
            />
        </div>
  )
}
as