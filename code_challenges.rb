# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def only_letter arrayStr, letter
    arrayStr.select do |str|
        if str.include? letter
            str
        end
    end
end

p only_letter beverages_array,letter_t
p only_letter beverages_array,letter_o


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels str
    str.delete "aeiou", "^e"
end

p remove_vowels album1

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

class Bike
    attr_accessor :bike_name, :wheels, :current_speed
    def initialize bike_name
        @bike_name = bike_name
        @wheels = 2
        @current_speed = 0
    end

    def get_info
        "The #{@bike_name} has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def pedal_faster
        @current_speed += 1
    end
    # i am trying to create a methods that checks the the speed.
    # if the speed is greater than 0 decrease is by one
    # else just print a statement that says the car has stopped
    def brake speed
        if speed > 0
            @current_speed -= 1
        else
            "Bike has stopped"
        end
    end
    
    
end

bike_one = Bike.new("Trek")
p bike_one.get_info
bike_one.pedal_faster
bike_one.pedal_faster
bike_one.pedal_faster
p bike_one.current_speed
bike_one.brake bike_one.current_speed
p bike_one.current_speed
bike_one.brake bike_one.current_speed
p bike_one.current_speed
bike_one.brake bike_one.current_speed
p bike_one.current_speed
p bike_one.brake bike_one.current_speed
p bike_one.current_speed