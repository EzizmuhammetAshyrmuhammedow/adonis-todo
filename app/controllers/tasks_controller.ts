import Task from '#models/task'
import TaskTransformer from '#transformers/task_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  async index({ inertia }: HttpContext) {
    const tasks = await Task.query()
      .preload('user')
      .orderBy('created_at', 'desc')

    return inertia.render('tasks/index', {
      tasks: TaskTransformer.transform(tasks)
    })
  }
}
