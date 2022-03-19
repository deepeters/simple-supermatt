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
	
	@RequestMapping("/category")
	public List<Category> getAllCategory() {
		return categoryService.getAllCategory();
	}
	
	@RequestMapping("/category/{id}")
	public Optional<Category> getCategory(@PathVariable String id) {
		return categoryService.getCategory(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/category")
	public void addCategory(@RequestBody Category category) {
		categoryService.addCategory(category);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/category/{id}")
	public void updateCategory(@RequestBody Category category, @PathVariable String id) {
		categoryService.updateCategory(id, category);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/category/{id}")
	public void deleteCategory(@PathVariable String id) {
		categoryService.deleteCategory(id);
	}


}
