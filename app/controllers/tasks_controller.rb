class TasksController < ApplicationController

  def index
    render :json => Task.all.to_json
  end

  def create
    task = Task.create(:description => params["description"])
    render :json => task
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render :nothing => true
  end
  
  def update
    task = Task.find params[:id]
    task.update_attribute(:complete, params[:complete])
    render :json => task
  end
  
  
end
