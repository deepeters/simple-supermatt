package ke.springboot.java.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ke.springboot.java.category.Category;


@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping("/category/{id}/products")
	public List<Product> getAllProducts(@PathVariable String id) {
		return productService.getAllProducts(id);
	}
	
	@RequestMapping("/category/{categoryId}/products/{id}")
	public Optional<Product> getproduct(@PathVariable String id) {
		return productService.getProduct(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/category/{categoryId}/products")
	public void addproduct(@RequestBody Product product, @PathVariable String categoryId) {
		product.setCategory(new Category(categoryId, "", ""));
		productService.addProduct(product);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/category/{categoryId}/products/{id}")
	public void updateproduct(@RequestBody Product product, @PathVariable String categoryId, @PathVariable String id) {
		product.setCategory(new Category(categoryId, "", ""));
		productService.updateProduct(product);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/category/{categoryId}/products/{id}")
	public void deleteCategory(@PathVariable String id) {
		productService.deleteProduct(id);
	}


}
