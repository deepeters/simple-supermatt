package ke.springboot.java.product;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, String> {
	
	//public List<Product> findByCategoryId (String topic);

}
