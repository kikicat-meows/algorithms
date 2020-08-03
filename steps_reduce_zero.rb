def number_of_steps (num, steps = 0)
    return steps if num.zero?
    
    if num % 2 == 0
        number_of_steps(num/2, steps + 1)
    else
        number_of_steps(num-1, steps + 1)
    end
    
end

