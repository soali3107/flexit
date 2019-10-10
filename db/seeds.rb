# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Video.destroy_all
User.create(email: "demo@gmail.com", password: "demoLogin");

User.create!(email: "demo2", password: "password");

iron = Video.create!(
    title: "Iron Man",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    release_year: 2008,
    ratings: "PG-13"
)

iron.video.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/iron.mp4"), filename: 'iron.mp4')
iron.photo.attach(io:  open("https://netflix-aa-dev.s3.amazonaws.com/iron.jpg"), filename: 'iron.jpg')


mirror =  Video.create!(
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide.",
    release_year: 2011,
    ratings: "TV-MA"
)
mirror.video.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/mirror.mp4"), filename: 'mirror.mp4')
mirror.photo.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/mirror.jpg"), filename: "mirror.jpg")

office = Video.create!(
    title: "The Office", 
    description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    release_year: 2005,
    ratings: "TV-14",
)
office.video.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/office.mp4"), filename: 'office.mp4')
office.photo.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/office.jpg"), filename: "office.jpg")

robot  = Video.create!(
    title: "Mr. Robot",
    description: "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    release_year: 2015,
    ratings: "TV-MA"
)
robot.video.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/robot.mp4"), filename: 'robot.mp4')
robot.photo.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/robot.png"), filename: "robot.png")

valley = Video.create!(
    title: "Silicon Valley",
    description: "In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own experiences as a Silicon Valley engineer in the late 1980s.",
    release_year: 2014,
    ratings: "TV-MA"
)
valley.video.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/valley.mov"), filename: 'valley.mp4')
valley.photo.attach(io: open("https://netflix-aa-dev.s3.amazonaws.com/valley.jpg"), filename: "valley.jpg")
