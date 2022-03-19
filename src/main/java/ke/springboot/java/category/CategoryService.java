package ke.springboot.java.category;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository topicRepository;
	
	public List<Category> getAllCategory () {
		List<Category> topics = new ArrayList<>();
		topicRepository.findAll().forEach(topics::add);
		return topics;
	}
	
	public Optional<Category> getTopic(String id) {
		return topicRepository.findById(id);
	}
	
	public void addCategory(Category topic) {
		topicRepository.save(topic);
	}

	public void updateCategory(String id, Category topic) {
		topicRepository.save(topic);
	}

	public void deleteCategory(String id) {
		topicRepository.deleteById(id);
	}

}
