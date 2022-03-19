package ke.springboot.java.category;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/topics")
	public List<Category> getAllCategory() {
		return categoryService.getAllCategory();
	}
	
	@RequestMapping("/topics/{id}")
	public Optional<Category> getTopic(@PathVariable String id) {
		return categoryService.getCategory(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/topics")
	public void addTopic(@RequestBody Category topic) {
		categoryService.addCategory(topic);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/topics/{id}")
	public void updateTopic(@RequestBody Category topic, @PathVariable String id) {
		categoryService.updateCategory(id, topic);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/topics/{id}")
	public void deleteCategory(@PathVariable String id) {
		categoryService.deleteCategory(id);
	}


}
