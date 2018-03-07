# Run me with `ruby problem.rb`
require "minitest/autorun"

module Problem

  def self.count_words(word_list)
    raise ArgumentError.new("Array must contain at least 1 item") if word_list.size < 1
    sorted_word_list = self.to_lower_case(word_list).sort
    word_count = self.populate_hash(sorted_word_list)
    return self.convert_hash_to_string(word_count)
  end

  def self.to_lower_case(array)
    return array.map do |item|
      item.downcase
    end
  end

  def self.populate_hash(word_list)
    word_count = Hash.new
    word_list.each do |word|
      word_count.has_key?(word) ? word_count[word] += 1 : word_count[word] = 1
    end
    return word_count
  end

  def self.convert_hash_to_string(hash)
    string = String.new
    hash.each do |key, value|
      string += "#{key} #{value}, "
    end
    return string.chomp(', ')
  end
  
end

class TestMeme < Minitest::Test
  def test_simple_list
    word_list = %w[Cannellini baked cannellini kidney]
    assert_equal 'baked 1, cannellini 2, kidney 1', Problem.count_words(word_list)
  end

  def test_expanded_list
    word_list = %w(one one two two two three four five six)
    assert_equal 'five 1, four 1, one 2, six 1, three 1, two 3', Problem.count_words(word_list)
  end

  def test_single_word
    word_list = %w(beans)
    assert_equal 'beans 1', Problem.count_words(word_list)
  end

  def test_empty_word_list
    word_list = []
    assert_raises ArgumentError do
     Problem.count_words(word_list)
   end
 end
end