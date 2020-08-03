def kids_with_candies(candies, extra_candies)
    max = candies.max
    res = []
    candies.each do |kid|
       kid + extra_candies >= max ? res << true : res << false 
    end
    
    res
end


## or

def kids_with_candies(candies, extra_candies)
    max = candies.max
    # res = []
    candies.each_with_index do |kid, idx|
       kid + extra_candies >= max ? candies[idx] = true : candies[idx] = false 
    end
    
    candies
end