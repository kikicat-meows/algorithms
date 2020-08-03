def num_jewels_in_stones(j, s)
    count = Hash.new
    
    j.each_char {|char| count[char] = 0}
    
    s.each_char do |c|
       if count[c]
           count[c] += 1
       end
    end
    
    count.values.sum
end