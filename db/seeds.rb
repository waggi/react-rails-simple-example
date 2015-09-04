# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

p = Post.new(title: 'Down the Rabbit-Hole')
p.contents = <<EOF
Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do:
once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it,
`and what is the use of a book,' thought Alice `without pictures or conversation?'
EOF

p.save

p = Post.new(title: 'The Pool of Tears')
p.contents = <<EOF
`Curiouser and curiouser!' cried Alice (she was so much surprised, that for the moment she quite forgot
how to speak good English); `now I'm opening out like the largest telescope that ever was! Good-bye, feet!'
(for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off).
`Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears?
I'm sure _I_ shan't be able! I shall be a great deal too far off to trouble myself about you: you must manage
the best way you can; --but I must be kind to them,' thought Alice, `or perhaps they won't walk the way
I want to go! Let me see: I'll give them a new pair of boots every Christmas.'
EOF

p.save
