interface IHabitProps {
  completed: number;
}

export function Habit({ completed }: IHabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10">
      Tasks completadas: {completed}
    </div>
  )
}