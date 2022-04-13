package ke.springboot.java.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin //(origins="http://localhost:3000/")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping("/products")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}
	
	@RequestMapping("/products/{id}")
	public Optional<Product> getproduct(@PathVariable String id) {
		return productService.getProduct(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/products")
	public void addproduct(@RequestBody Product product) {
		productService.addProduct(product);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/products/{id}")
	public void updateproduct(@RequestBody Product product, @PathVariable String id) {
		productService.updateProduct(product);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/products/{id}")
	public void deleteCategory(@PathVariable String id) {
		productService.deleteProduct(id);
	}


}
