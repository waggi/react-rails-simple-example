require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  test 'get index action' do
    get :index
    assert_response :success
  end
end
