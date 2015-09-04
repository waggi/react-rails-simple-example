require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  fixtures 'posts'
  setup :init_post

  test 'get index action' do
    get :index
    assert_response :success
  end

  test 'should create post' do
    post :create, post: @post.serializable_hash, :format => 'json'
    assert_response :success
    assert_not_nil JSON.parse(response.body)
  end

  def init_post
    @post = posts(:one)
  end
end